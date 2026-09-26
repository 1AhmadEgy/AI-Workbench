export type AIProvider="gemini"|"deepseek"|"openai-compatible";
export interface ModelRequest{provider:AIProvider;model:string;prompt:string}
export interface ModelResponse{text:string;provider:AIProvider;model:string}