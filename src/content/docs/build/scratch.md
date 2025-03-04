---
title: How to build from scratch
description: Use other runtime with noraneko
---

Noraneko is developed using Firefox pre-built binaries. \
This page explains how to build from scratch using Firefox binaries instead of noraneko-runtime pre-built binaries.

## How Noraneko works

Firefox uses three major resources.
- Source files that need to be compiled (.cpp, .rs, etc.)
- Plain text files (.js, .xhtml, etc.)
- Build files (moz.build, jar.mn, etc.)

In the Firefox build, the source files that need to be compiled are compiled to binary, and the plain text files are copied and output as the result. \
In this process, the plain text files are copied in the manner specified in the build file as each file and each folder, and placed in a form that can be modified as text.

Noraneko makes changes to the text files during development to include Noraneko's JS files and other files.
- .xhtml (for importing Noraneko JS files)
- .js (to change Firefox's prescribed behavior)
- chrome.manifest (to make Firefox recognize it as an internal file)

Changes to JS files are called `inject` in Noraneko development. \
Please refer to noraneko/scripts for more information on this change.

Since the changes were made during development, the basic functionality is available no matter which runtime you use. \
(If you use other Runtime, you cannot use patches such as .cpp files that are modified independently by noraneko-runtime.)

In this case, it is assumed that Firefox binaries are used.

## Getting binaries

Firefox provides a very useful feature called Artifact build. \
This feature downloads binaries from Mozilla's servers in the same way as Noraneko binaries. \
If you want to use this feature, you need to clone it from Mozilla Central using git-cinnabar or similar, instead of a git mirror (gecko-dev). \
[Firefox Source Docs contribution reference](https://firefox-source-docs.mozilla.org/contributing/contribution_quickref.html).

You can also use directly built binaries. \
Likewise, please check Firefox Source Docs.

## Using with Noraneko

 When your custom runtime directory handle as root, place `root/obj-*/dist/bin` (`root/obj-x86_64-pc-windows-msvc/dist/bin` on Windows) as `noraneko/_dist/bin`. \
As usual, just run `pnpm dev`!

Congraturations!