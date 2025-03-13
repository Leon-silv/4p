import Link from "next/link";
import { styles } from "../page";

export default function Page() {
    return (
        <div className="h-screen flex flex-col gap-4 justify-center px-40">
            <div className="flex flex-col">
                <label htmlFor="date">Date of birth</label>
                <input id="date" type="date" className="border px-4 py-2" />

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
            
                <button className={styles}>
                voltar ao menu inicial
                </button>
            </Link>
        </div>
    )
}