import Link from "next/link";
import { styles } from "../page";
import Image from "next/image";

export default function Page() {
    return (
        <div className="h-screen flex flex-col gap-4 justify-center items-center px-40">
       
        <Image alt="Image" src="/logo.png" width={250} height={250} className=" object-contain" />
            <div className="flex flex-col gap-4 items-center">
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

      <Link href={"/"}>
            
            <button className={styles}>
            voltar ao menu inicial
            </button>
        </Link>
            </div>
        </div>
    )
}