import { TimelineItem } from "@/types/timeline";

export const TIMELINE_DATA: TimelineItem[] = [
  {
    title: "zkps invented",
    date: "1982",
    description: "Zero Knowledge Proofs invented",
    link: "https://people.csail.mit.edu/silvio/Selected%20Scientific%20Papers/Proof%20Systems/The_Knowledge_Complexity_Of_Interactive_Proof_Systems.pdf"
  },
  {
    title: "Interactive Proofs",
    date: "1985",
    description: "First publication of ZK by Micali, Goldwasser, Rackoff",
    link: "https://people.csail.mit.edu/silvio/Selected%20Scientific%20Papers/Zero%20Knowledge/Proofs_That_Yield_Nothing_But_Their_Validity_Or_All_Languages_In_NP_Have_Zero-Knowledge_Proof_Systems.pdf"
  },
  {
    title: "Non-Interactive Proofs",
    date: "1988",
    description: "Blum, Feldman, and Micali introduce non-interactive proofs",
    link: "https://link.springer.com/chapter/10.1007/0-387-34799-2_9"
  },
  {
    title: "Pedersen Commitment Scheme",
    date: "1991",
    description: "Pedersen introduces the Pedersen Commitment Scheme",
    link: "https://link.springer.com/chapter/10.1007/3-540-46766-1_9"
  },
  {
    title: "Sumcheck Protocol",
    date: "1992",
    description: "Introduction of the Sumcheck protocol",
    link: "https://dl.acm.org/doi/10.1145/146585.146605"
  },
  {
    title: "Multi-Prover Interactive Proofs",
    date: "1993",
    description: "Ben-Or introduces Multi-Prover Interactive Proofs",
    link: "https://dl.acm.org/doi/10.1145/167088.167174"
  },
  {
    title: "PCP Theorem",
    date: "1997",
    description: "Introduction of the Probabilistically Checkable Proof (PCP) Theorem",
    link: "https://dl.acm.org/doi/10.1145/258533.258621"
  },
  {
    title: "NIZK Proofs in the Common Reference String Model",
    date: "2001",
    description: "Groth, Ostrovsky, Sahai introduce NIZK Proofs in the Common Reference String Model",
    link: "https://eprint.iacr.org/2001/055"
  },
  {
    title: "GKR Protocol",
    date: "2007",
    description: "Introduction of the GKR Protocol",
    link: "https://dl.acm.org/doi/10.1145/1250790.1250872"
  },
  {
    title: "KZG Polynomial Commitment Scheme",
    date: "2010",
    description: "Introduction of the KZG Polynomial Commitment Scheme",
    link: "https://www.iacr.org/archive/asiacrypt2010/6477178/6477178.pdf"
  },
  {
    title: "zkSNARKs Defined",
    date: "2012",
    description: "zkSNARKs defined for the first time by Bitansky, Canetti, Chiesa",
    link: "https://eprint.iacr.org/2012/215"
  },
  {
    title: "GGPR Protocol",
    date: "2013",
    description: "First practical zkSNARK protocol that encoded computation as quadratic programs",
    link: "https://eprint.iacr.org/2012/215"
  },
  {
    title: "Pinocchio",
    date: "2013",
    description: "First Proof-of-Concept implementation of zkSNARKs called Pinocchio",
    link: "https://eprint.iacr.org/2013/279"
  },
  {
    title: "Zerocoin Paper",
    date: "2013",
    description: "Zerocoin paper merges blockchain and zkSNARKs concepts",
    link: "https://bitcoin.pdf.technology/pdf/zerocoin.pdf"
  },
  {
    title: "LibSnark Released",
    date: "2014",
    description: "LibSnark library released for zkSNARKs",
    link: "https://github.com/scipr-lab/libsnark"
  },
  {
    title: "ZeroCash Paper",
    date: "2014",
    description: "ZeroCash paper uses LibSnark for Proof-of-Concept implementation of ZCash",
    link: "http://zerocash-project.org/paper"
  },
  {
    title: "Coda Protocol",
    date: "2015",
    description: "Introduction of the Coda Protocol",
    link: "https://minaprotocol.com/"
  },
  {
    title: "ZCash Official Launch",
    date: "2016",
    description: "ZCash launched as a public software",
    link: "https://z.cash/"
  },
  {
    title: "Groth16",
    date: "2016",
    description: "Jens Groth introduces Groth16, making zkSNARKs efficient and practical to use",
    link: "https://eprint.iacr.org/2016/260"
  },
  {
    title: "Bulletproofs",
    date: "2017",
    description: "Introduction of Bulletproofs",
    link: "https://eprint.iacr.org/2017/1066"
  },
  {
    title: "FRI Paper",
    date: "2017",
    description: "Introduction of the FRI Paper",
    link: "https://eccc.weizmann.ac.il/report/2017/134/"
  },
  {
    title: "STARKs",
    date: "2018",
    description: "Introduction of STARKs",
    link: "https://eprint.iacr.org/2018/046"
  },
  {
    title: "ZK Summit and ZCon0",
    date: "2018",
    description: "Start of zk events ecosystem, ZK Summit and ZCon0 held",
    link: "https://zksummit.com/"
  },
  {
    title: "zkSNARKs Innovation",
    date: "2019",
    description: "zkSNARK innovations including Sonic, Marlin, Plonk, Redshift, Spartan, Aurora",
    link: "https://eprint.iacr.org/2019/099"
  },
  {
    title: "Halo",
    date: "2019",
    description: "Introduction of Halo by Sean Bowe, recursive proof composition without a trusted setup",
    link: "https://eprint.iacr.org/2019/1021"
  },
  {
    title: "Mina Protocol and Starknet",
    date: "2020",
    description: "Mina Protocol and Starknet introduce zkSNARKs and zkSTARKs tech for blockchain scalability",
    link: "https://minaprotocol.com/"
  },
  {
    title: "Dark Forest Game",
    date: "2020",
    description: "Release of the Dark Forest game using zk technology",
    link: "https://zkga.me/"
  },
  {
    title: "New Schemes Introduced",
    date: "2020",
    description: "Halo, Halo2, Hyperplonk, Plonky, Plookup and other new schemes introduced",
    link: "https://eprint.iacr.org/2020/1618"
  },
  {
    title: "Nova Folding Scheme",
    date: "2021",
    description: "Introduction of Nova folding scheme, Brakedown, SnarkPack, fflonK, SHPLONK",
    link: "https://eprint.iacr.org/2021/370"
  },
  {
    title: "Hyperplonk and Plonky2",
    date: "2022",
    description: "Introduction of Hyperplonk, Plonky2, Supernova, Caulk, cq, Kimchi",
    link: "https://github.com/mir-protocol/plonky2"
  },
  {
    title: "Polygon zkEVM Testnet",
    date: "2022",
    description: "Polygon launches zkEVM testnet",
    link: "https://polygon.technology/solutions/polygon-zkevm"
  },
  {
    title: "Boojum and Optimizations",
    date: "2023",
    description: "Introduction of Boojum, Hypernova, Protostar, Protogalaxy, Jolt, Lasso, optimizing IVC concepts",
    link: "https://matter-labs.io/"
  },
  {
    title: "Polymath and More",
    date: "2024",
    description: "Introduction of Polymath, CircleSTARKs, Plonky3, StackProofs, Garuda and Pari, STIR, WHIR",
    link: "https://polymath.network/"
  },
];