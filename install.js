#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

const commands = [
  `mkdir -p ${__dirname}/tmp/fonts`,
  `wget -q -O ${__dirname}/tmp/NotoSans.zip -c 'https://noto-website-2.storage.googleapis.com/pkgs/NotoSansDisplay-hinted.zip'`,
  `wget -q -O ${__dirname}/tmp/NotoSansArabic.zip -c 'https://noto-website-2.storage.googleapis.com/pkgs/NotoSansArabic-hinted.zip'`,
  `rm -rf ${__dirname}/tmp/fonts`,
  `mkdir -p ${__dirname}/tmp/fonts`,
  `cp ${__dirname}/tmp/NotoSans.zip ${__dirname}/tmp/fonts/`,
  `cp ${__dirname}/tmp/NotoSansArabic.zip ${__dirname}/tmp/fonts/`,
  `cd ${__dirname}/tmp/fonts/`,
  `unzip -o NotoSans.zip`,
  `unzip -o NotoSansArabic.zip`,
  `rm *.zip`,
  `rm -rf *Arabic-*`,
];

execSync(commands.join(' && '));

const fonts = [
  ''
];

execSync(`cd ${__dirname}/tmp && pyftmerge ${fonts.join(' ')}`);
