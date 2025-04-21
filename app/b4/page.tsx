import Link from "next/link";
import { styles } from "../page";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Page() {
    return (
        <div className="h-screen flex flex-col gap-4 justify-center items-center px-40">
       
        <Image alt="Image" src="/logo.png" width={250} height={250} className=" object-contain" />
            <div className="flex flex-col gap-4 items-center">
            <Link href={"/b1"} >
        <Button>
    Botão 1
        </Button>
      </Link>
      <Link href={"/b2"} >
        <Button>
    Botão 2
        </Button>
      </Link>
      <Link href={"/b3"} >
        <Button>
    Botão 3
        </Button>
      </Link>

      <Link href={"/"}>
            
            <Button >
            voltar ao menu inicial
            </Button>
        </Link>
            </div>
        </div>
    )
}