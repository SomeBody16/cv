import { PrintPageBreak } from "components/PrintPageBreak";
import {
    Activities,
    CertificatesEtc,
    Education,
    Experience,
    Header,
    Hobbys,
    Languages,
    Skills,
} from "sections";

export default function Home() {
    return (
        <main className="p-8">
            <Header />
            <div className="flex mt-4">
                <div className="flex-1 pr-2">
                    <Skills order="01" />
                    <Education order="03" />
                </div>
                <div className="flex-1 pl-2">
                    <Languages order="02" />
                    <Hobbys order="04" />
                </div>
            </div>
            <PrintPageBreak />
            <Experience order="02" className="mt-4" />
            <CertificatesEtc order="05" />
            <PrintPageBreak />
            <Activities order="06" className="mt-4" />
        </main>
    );
}
