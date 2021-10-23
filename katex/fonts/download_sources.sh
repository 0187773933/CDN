#!/bin/bash
cat sourcelist.txt | while read in; do wget "$in"; done
