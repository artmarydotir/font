#!/bin/bash

DIR=$(dirname "$(readlink -f "$0")")
TMP_DIR=$DIR/tmp
FONT_DIR=$DIR/tmp/fonts

mkdir -p $FONT_DIR

wget -O $TMP_DIR/NotoSans.zip -c 'https://noto-website-2.storage.googleapis.com/pkgs/NotoSansDisplay-hinted.zip'
wget -O $TMP_DIR/NotoSansArabic.zip -c 'https://noto-website-2.storage.googleapis.com/pkgs/NotoSansArabic-hinted.zip'

rm -rf $FONT_DIR \
  && mkdir -p $FONT_DIR \
  && cp $TMP_DIR/NotoSans.zip $FONT_DIR/ \
  && cp $TMP_DIR/NotoSansArabic.zip $FONT_DIR/ \
  && cd $FONT_DIR \
  && unzip -o NotoSans.zip \
  && unzip -o NotoSansArabic.zip \
  && rm *.zip \
  && rm -rf *Arabic-*


  # && pyftmerge NotoSansDisplay-Regular.ttf NotoSansArabicUI-Regular.ttf \
  # && rm -f $TMP_DIR/Regular.ttf \
  # && mv merged.ttf $TMP_DIR/Regular.ttf