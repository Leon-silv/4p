import Image from "next/image";
import Link from "next/link";

export const styles = "bg-blue-400 text-white px-4 py-1.5 rounded"
export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col gap-20 justify-center text-center items-center">
      
      <div>
      <Image alt="Image" src="/logo.png" width={250} height={250} className=" object-contain" />
      <h4 className="text-3xl font-semibold">O meu novo MENU</h4>
      </div>

      <div className="flex flex-col gap-2">
        
      <Link href={"/b1"} className={styles}>
        <button>
    Botão 1
        </button>
      </Link>
      <Link href={"/b2"} className={styles}>
        <button>
    Botão 2
        </button>
      </Link>
      <Link href={"/b3"} className={styles}>
        <button>
    Botão 3
        </button>
      </Link>
      <Link href={"/b4"} className={styles}>
        <button>
    Botão 4
        </button>
      </Link>
      </div>
    </div>
  );
}
