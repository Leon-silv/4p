import { Button } from "@/components/ui/button";
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
        <Link href={"/b4"} >
          <Button>
            Botão 4
          </Button>
        </Link>
      </div>
    </div>
  );
}
