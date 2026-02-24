import proxinex1 from "@/assets/snapshots/proxinex-1.jpg";
import proxinex2 from "@/assets/snapshots/proxinex-2.jpg";
import proxinex3 from "@/assets/snapshots/proxinex-3.jpg";
import proxinex4 from "@/assets/snapshots/proxinex-4.jpg";

import traceflow1 from "@/assets/snapshots/traceflow-1.jpg";
import traceflow2 from "@/assets/snapshots/traceflow-2.jpg";
import traceflow3 from "@/assets/snapshots/traceflow-3.jpg";
import traceflow4 from "@/assets/snapshots/traceflow-4.jpg";

import chronyx1 from "@/assets/snapshots/chronyx-1.jpg";
import chronyx2 from "@/assets/snapshots/chronyx-2.jpg";
import chronyx3 from "@/assets/snapshots/chronyx-3.jpg";
import chronyx4 from "@/assets/snapshots/chronyx-4.jpg";

import huminex1 from "@/assets/snapshots/huminex-1.jpg";
import huminex2 from "@/assets/snapshots/huminex-2.jpg";
import huminex3 from "@/assets/snapshots/huminex-3.jpg";
import huminex4 from "@/assets/snapshots/huminex-4.jpg";

import qualyx1 from "@/assets/snapshots/qualyx-1.jpg";
import qualyx2 from "@/assets/snapshots/qualyx-2.jpg";
import qualyx3 from "@/assets/snapshots/qualyx-3.jpg";
import qualyx4 from "@/assets/snapshots/qualyx-4.jpg";

import opzenix1 from "@/assets/snapshots/opzenix-1.jpg";
import opzenix2 from "@/assets/snapshots/opzenix-2.jpg";
import opzenix3 from "@/assets/snapshots/opzenix-3.jpg";
import opzenix4 from "@/assets/snapshots/opzenix-4.jpg";

import cognix1 from "@/assets/snapshots/cognix-1.jpg";
import cognix2 from "@/assets/snapshots/cognix-2.jpg";
import cognix3 from "@/assets/snapshots/cognix-3.jpg";
import cognix4 from "@/assets/snapshots/cognix-4.jpg";

import originxOne1 from "@/assets/snapshots/originxone-1.jpg";
import originxOne2 from "@/assets/snapshots/originxone-2.jpg";
import originxOne3 from "@/assets/snapshots/originxone-3.jpg";
import originxOne4 from "@/assets/snapshots/originxone-4.jpg";

export interface ProductSnapshotItem {
  title: string;
  description: string;
  image: string;
  href: string;
}

export const productSnapshots: Record<string, ProductSnapshotItem[]> = {
  proxinex: [
    { title: "PROXINEX Snapshot 1", description: "Official product website snapshot.", image: proxinex1, href: "https://www.proxinex.com/" },
    { title: "PROXINEX Snapshot 2", description: "Official product website snapshot.", image: proxinex2, href: "https://www.proxinex.com/" },
    { title: "PROXINEX Snapshot 3", description: "Official product website snapshot.", image: proxinex3, href: "https://www.proxinex.com/" },
    { title: "PROXINEX Snapshot 4", description: "Official product website snapshot.", image: proxinex4, href: "https://www.proxinex.com/" },
  ],
  traceflow: [
    { title: "TRACEFLOW Snapshot 1", description: "Official product website snapshot.", image: traceflow1, href: "https://www.traceflowhq.com/" },
    { title: "TRACEFLOW Snapshot 2", description: "Official product website snapshot.", image: traceflow2, href: "https://www.traceflowhq.com/" },
    { title: "TRACEFLOW Snapshot 3", description: "Official product website snapshot.", image: traceflow3, href: "https://www.traceflowhq.com/" },
    { title: "TRACEFLOW Snapshot 4", description: "Official product website snapshot.", image: traceflow4, href: "https://www.traceflowhq.com/" },
  ],
  chronyx: [
    { title: "CHRONYX Snapshot 1", description: "Official product website snapshot.", image: chronyx1, href: "https://www.getchronyx.com/" },
    { title: "CHRONYX Snapshot 2", description: "Official product website snapshot.", image: chronyx2, href: "https://www.getchronyx.com/" },
    { title: "CHRONYX Snapshot 3", description: "Official product website snapshot.", image: chronyx3, href: "https://www.getchronyx.com/" },
    { title: "CHRONYX Snapshot 4", description: "Official product website snapshot.", image: chronyx4, href: "https://www.getchronyx.com/" },
  ],
  huminex: [
    { title: "HUMINEX Snapshot 1", description: "Official product website snapshot.", image: huminex1, href: "https://www.gethuminex.com/" },
    { title: "HUMINEX Snapshot 2", description: "Official product website snapshot.", image: huminex2, href: "https://www.gethuminex.com/" },
    { title: "HUMINEX Snapshot 3", description: "Official product website snapshot.", image: huminex3, href: "https://www.gethuminex.com/" },
    { title: "HUMINEX Snapshot 4", description: "Official product website snapshot.", image: huminex4, href: "https://www.gethuminex.com/" },
  ],
  qualyx: [
    { title: "QUALYX Snapshot 1", description: "Official product website snapshot.", image: qualyx1, href: "https://www.getqualyx.com/" },
    { title: "QUALYX Snapshot 2", description: "Official product website snapshot.", image: qualyx2, href: "https://www.getqualyx.com/" },
    { title: "QUALYX Snapshot 3", description: "Official product website snapshot.", image: qualyx3, href: "https://www.getqualyx.com/" },
    { title: "QUALYX Snapshot 4", description: "Official product website snapshot.", image: qualyx4, href: "https://www.getqualyx.com/" },
  ],
  opzenix: [
    { title: "OPZENIX Snapshot 1", description: "Official product website snapshot.", image: opzenix1, href: "https://www.opzenix.com/" },
    { title: "OPZENIX Snapshot 2", description: "Official product website snapshot.", image: opzenix2, href: "https://www.opzenix.com/" },
    { title: "OPZENIX Snapshot 3", description: "Official product website snapshot.", image: opzenix3, href: "https://www.opzenix.com/" },
    { title: "OPZENIX Snapshot 4", description: "Official product website snapshot.", image: opzenix4, href: "https://www.opzenix.com/" },
  ],
  cognix: [
    { title: "COGNIX Snapshot 1", description: "Official product website snapshot.", image: cognix1, href: "https://www.getcognix.io/" },
    { title: "COGNIX Snapshot 2", description: "Official product website snapshot.", image: cognix2, href: "https://www.getcognix.io/" },
    { title: "COGNIX Snapshot 3", description: "Official product website snapshot.", image: cognix3, href: "https://www.getcognix.io/" },
    { title: "COGNIX Snapshot 4", description: "Official product website snapshot.", image: cognix4, href: "https://www.getcognix.io/" },
  ],
  originxone: [
    { title: "OriginX One Snapshot 1", description: "Official product website snapshot.", image: originxOne1, href: "https://www.originxcloud.com/" },
    { title: "OriginX One Snapshot 2", description: "Official product website snapshot.", image: originxOne2, href: "https://www.originxcloud.com/" },
    { title: "OriginX One Snapshot 3", description: "Official product website snapshot.", image: originxOne3, href: "https://www.originxcloud.com/" },
    { title: "OriginX One Snapshot 4", description: "Official product website snapshot.", image: originxOne4, href: "https://www.originxcloud.com/" },
  ],
};
