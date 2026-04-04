# Sample Player Plugin

A [Signals & Sorcery](https://signalsandsorcery.com) plugin for browsing, importing, and playing audio samples with time-stretching.

## What it does

- Browse and search the sample library by category, BPM, key, and tags
- Import audio files (WAV, MP3, FLAC, OGG, AIFF) into the library
- Create sample tracks scoped to the active scene
- Time-stretch samples to match project BPM
- Per-track volume, pan, mute, and solo controls

## Install

From within Signals & Sorcery: **Settings > Manage Plugins > Add Plugin** and enter:

```
https://github.com/shiehn/sas-sample-plugin
```

Or clone manually into `~/.signals-and-sorcery/plugins/@signalsandsorcery/sample-player/`.

## Capabilities

| Capability | Required |
|------------|----------|
| `fileDialog` | Yes - file import dialog |

## Development

Built with the [@signalsandsorcery/plugin-sdk](https://github.com/shiehn/sas-plugin-sdk). See the [Plugin SDK docs](https://signalsandsorcery.com/plugin-sdk/) for the full API reference.

## License

MIT
