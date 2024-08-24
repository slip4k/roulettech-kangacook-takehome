export default function NavBar() {
  return (
    <>
      <div className="flex justify-between w-full py-10 px-[10dvw]">
        <div>
          <a href="/" className="w-1/2 text-5xl font-black">
            frm.
          </a>
        </div>
        <div className="flex md:gap-10 gap-4 md:text-lg items-center text-sm">
          <a href="/">Home</a>
          <a href="/posts">Posts</a>
          <a href="/support">Support</a>
        </div>
      </div>
    </>
  );
}
