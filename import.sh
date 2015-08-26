#!/bin/sh

set -ue

me="`basename "$0"`"

if [ $# -ne 1 ]; then
	echo "USAGE: $me build_dir" >&2
	exit 1
fi

build_dir="$1"

if [ ! -d "$build_dir" ]; then
	echo "ERROR: build dir must be a valid directory" >&2
	exit 2
fi

cd "`dirname "$0"`"

for f in *; do
	if [ $f = $me ] || [ $f = "CNAME" ] || [ $f = "README.md" ]; then
		continue
	fi

	git rm -rf "$f"
done

cp -r "$build_dir/"* .

git add .
