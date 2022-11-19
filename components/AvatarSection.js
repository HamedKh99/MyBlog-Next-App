import Image from "next/image";

export default function AvatarSection() {
  return (
    <div className="w-auto flex flex-col justify-center items-center">
      <Image
        className="w-36 h-36 rounded-full"
        src="/images/avatar.jpg"
        alt="Hamed Khanaki"
        height={144}
        width={144}
      />

      <h1 className="font-medium text-xl pt-2">Hamed Khanaki</h1>

      <p className="font-light">goo.hamedacc@gmail.com</p>
    </div>
  );
}
