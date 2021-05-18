import { importFileFromWeb } from '#scripts/utils';
import { fetch, FetchResultTypes } from '@sapphire/fetch';
import { Time, Timestamp } from '@sapphire/time-utilities';
import { green, red, yellow } from 'colorette';
import { writeFile } from 'node:fs/promises';
import { URL } from 'node:url';

const shaTrackerFileUrl = new URL('sha-tracker.json', import.meta.url);
const formatsFileUrl = new URL('../src/assets/formats.json', import.meta.url);
const oneMonthAgo = Date.now() - Time.Month;
const timestamp = new Timestamp('YYYY-MM-DD[T]HH:mm:ssZ').display(oneMonthAgo);

const url = new URL('https://api.github.com/repos/smogon/pokemon-showdown/commits');
url.searchParams.append('path', 'data/formats-data.ts');
url.searchParams.append('since', timestamp);

const [commits, { default: ciData }] = await Promise.all([
  fetch(url, FetchResultTypes.JSON), //
  import(shaTrackerFileUrl) //
]);

const data = { sha: commits.length ? commits[0].sha : null, length: commits.length };
if (!data) {
  console.error(red('no data from request'));

  process.exit(1);
}

if (data.sha === null || data.sha === ciData.tiersLastSha) {
  console.info(yellow('Fetched data but no new commit was available'));

  process.exit(0);
}

const { FormatsData } = await importFileFromWeb({
  url: 'https://raw.githubusercontent.com/smogon/pokemon-showdown/master/data/formats-data.ts',
  temporaryFileName: 'tiers.mjs'
});

const output = {};
// eslint-disable-next-line guard-for-in
for (const mon in FormatsData) {
  const tier = FormatsData[mon].isNonstandard || FormatsData[mon].tier;
  output[mon] = tier || 'Refer to base form / unknown';
}

const writePromises = [];

if (data.sha) writePromises.push(writeFile(shaTrackerFileUrl, JSON.stringify({ ...ciData, tiersLastSha: data.sha })));
if (output && Object.entries(output).length) writePromises.push(writeFile(formatsFileUrl, JSON.stringify(output)));

await Promise.all(writePromises);

console.log(green(`Successfully wrote updated formats data to file; Latest SHA ${data.sha}`));

process.exit(0);
