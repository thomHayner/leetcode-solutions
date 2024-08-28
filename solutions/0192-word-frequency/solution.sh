# Read from the file words.txt and output the word frequency list to stdout.

#!/bin/bash

awk '{ for (x=1; x<=NF; ++x) count[$x]++} END { for (word in count) print word, count[word] }' words.txt | sort -k2,2nr
