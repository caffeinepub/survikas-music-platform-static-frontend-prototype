# Specification

## Summary
**Goal:** Enable playable songs from the Home trending tracks and Artist profile popular tracks using existing audio assets and the existing AudioPlayer UI.

**Planned changes:**
- Add `audioSrc` fields to 1–3 items in `frontend/src/data/homeContent.ts` (trending tracks) pointing to `.mp3` files under `frontend/public/assets/`.
- Add `audioSrc` fields to 1–3 items in `frontend/src/data/artistContent.ts` (popular tracks) pointing to `.mp3` files under `frontend/public/assets/`.
- Wire the Play actions on Home trending track cards and Artist popular track rows to open/use `frontend/src/components/AudioPlayer.tsx` and start playback of the selected track when `audioSrc` is present.
- Ensure starting a new track stops/pauses any currently playing track so only one track plays at a time.
- When a track has no `audioSrc`, show a clear “audio not available” state using the existing AudioPlayer fallback behavior.

**User-visible outcome:** Users can click Play on supported tracks in the Home trending list and Artist popular tracks to hear audio, with only one track playing at a time and clear messaging when audio isn’t available.
