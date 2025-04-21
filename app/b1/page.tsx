import Link from "next/link";
import { styles } from "../page";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Page() {
    return (
        <div className="h-screen flex flex-col gap-4 justify-center px-40">
            <div className="flex flex-col">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Type your name..." className="border px-4 py-2" />

            </div>
            <div className="flex flex-col">
                <label >Options</label>
                <div className="flex items-cener gap-4">
                    <div className="flex items-center gap-1">
                        <input type="checkbox" value={"yes"} />
                        <span>Yes</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <input type="checkbox" value={"no"} />
                        <span>No</span>
                    </div>
                </div>
            </div>

            <Link href={"/"}>

                <Button >
                    voltar ao menu inicial
                </Button>
            </Link>
        </div>
    )
}