export function StoryVideo() {
  return (
    <div className="video-frame">
      <div className="flex h-full min-h-[320px] flex-col justify-between p-6 sm:p-8">
        <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-[0.18em] text-[#f7f2ea]">
          <span>Video</span>
          <span>Coming soon</span>
        </div>
        <div className="grid place-items-center">
          <div className="grid h-20 w-20 place-items-center rounded-full bg-white text-[#1e2320] shadow-2xl">
            <span className="ml-1 text-4xl leading-none">▶</span>
          </div>
        </div>
        <p className="max-w-md text-xl font-semibold leading-snug">
          Add your story film here when it is ready.
        </p>
      </div>
    </div>
  );
}
