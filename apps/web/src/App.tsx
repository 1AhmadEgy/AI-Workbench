import {useState} from "react";
import "./styles.css";
const files=["README.md","apps/web/src/App.tsx","apps/api/src/index.ts","packages/ai/src/index.ts"];
export function App(){
 const [active,setActive]=useState(files[0]);
 const preview="// "+active+"\n\nAI Workbench foundation is ready.\n\nNext: AI providers → agent runtime → GitHub → execution → preview.";
 return <div className="shell"><header><strong>AI Workbench</strong><span>Foundation</span><nav><button>Run</button><button>GitHub</button></nav></header><main><aside><h3>Workspace</h3>{files.map(f=><button className={active===f?"file active":"file"} onClick={()=>setActive(f)} key={f}>{f}</button>)}</aside><section><div className="tab">{active}</div><pre>{preview}</pre></section><aside className="agent"><h3>AI Agent</h3><p>DISCOVER → ANALYZE → PLAN → IMPLEMENT → VERIFY → REVIEW → DOCUMENT → REPORT</p><button className="primary">Start task</button></aside></main></div>;
}