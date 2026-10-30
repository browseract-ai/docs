export const MCPSetupPrompt = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState("Copy");
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); setStatus("Copied"); setTimeout(() => setStatus("Copy"), 1800); }
    catch { setStatus("Copy failed"); }
  };
  return <div className="not-prose rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden my-5">
    <div className="flex justify-end p-3 border-b border-gray-200 dark:border-gray-700"><button type="button" onClick={copy} className="rounded-lg border px-4 py-2 text-sm font-medium" aria-live="polite">{status}</button></div>
    <pre style={{ maxHeight: expanded ? "none" : "180px", overflow: "hidden", whiteSpace: "pre-wrap", margin: 0, padding: "20px", fontSize: "14px", lineHeight: "1.7" }}>{text}</pre>
    <button type="button" onClick={() => setExpanded(!expanded)} aria-expanded={expanded} className="w-full py-3 border-t border-gray-200 dark:border-gray-700 text-sm font-medium">{expanded ? "Show less ↑" : "Show more ↓"}</button>
  </div>;
};

export const MCPClientPrompts = () => {
  const [copied, setCopied] = useState(-1);
  const [error, setError] = useState(-1);
  const items = [
  {
    "name": "Claude Desktop",
    "icon": "/images/global-mcp/claude.svg",
    "prompt": "Connect BrowserAct to Claude Desktop. Use a setup method that supports the Bearer header; provide steps if local setup is unavailable.\n\nName: browseract\nURL: https://mcp.browseract.com/mcp/\nTransport: Streamable HTTP\nAuthorization: Bearer <BROWSERACT_API_KEY>\n\nReuse a valid key, or get one at https://www.browseract.com/reception/integrations?co-from=link-Docs. Enter it in local configuration or a secure credential field, never in chat.\n\nReuse or repair an existing browseract connection; preserve other MCP settings. Verify that BrowserAct tools are available, and reload only if needed. Report any setup or verification issue. Do not run tasks.",
    "group": "client"
  },
  {
    "name": "Gemini CLI",
    "icon": "/images/global-mcp/gemini.svg",
    "prompt": "Connect BrowserAct to Gemini CLI using its supported remote MCP configuration. Configure it if you can; otherwise give the setup command.\n\nName: browseract\nURL: https://mcp.browseract.com/mcp/\nTransport: Streamable HTTP\nAuthorization: Bearer <BROWSERACT_API_KEY>\n\nReuse a valid key, or get one at https://www.browseract.com/reception/integrations?co-from=link-Docs. Enter it in local configuration or a secure credential field, never in chat.\n\nReuse or repair an existing browseract connection; preserve other MCP settings. Verify that BrowserAct tools are available, and reload only if needed. Report any setup or verification issue. Do not run tasks.",
    "group": "client"
  },
  {
    "name": "Claude Code (CLI)",
    "icon": "/images/global-mcp/claude.svg",
    "prompt": "Connect BrowserAct to Claude Code using its HTTP MCP setup and Bearer header. Configure it if you can; otherwise give the setup command.\n\nName: browseract\nURL: https://mcp.browseract.com/mcp/\nTransport: Streamable HTTP\nAuthorization: Bearer <BROWSERACT_API_KEY>\n\nReuse a valid key, or get one at https://www.browseract.com/reception/integrations?co-from=link-Docs. Enter it in local configuration or a secure credential field, never in chat.\n\nReuse or repair an existing browseract connection; preserve other MCP settings. Verify that BrowserAct tools are available, and reload only if needed. Report any setup or verification issue. Do not run tasks.",
    "group": "client"
  },
  {
    "name": "Warp",
    "icon": "/images/global-mcp/warp.svg",
    "prompt": "Connect BrowserAct to Warp using its supported MCP settings. Configure it if you can; otherwise give the setup steps.\n\nName: browseract\nURL: https://mcp.browseract.com/mcp/\nTransport: Streamable HTTP\nAuthorization: Bearer <BROWSERACT_API_KEY>\n\nReuse a valid key, or get one at https://www.browseract.com/reception/integrations?co-from=link-Docs. Enter it in local configuration or a secure credential field, never in chat.\n\nReuse or repair an existing browseract connection; preserve other MCP settings. Verify that BrowserAct tools are available, and reload only if needed. Report any setup or verification issue. Do not run tasks.",
    "group": "client"
  },
  {
    "name": "Windsurf",
    "icon": "/images/global-mcp/windsurf.svg",
    "prompt": "Connect BrowserAct to Windsurf using its supported remote MCP configuration. Configure it if you can; otherwise give the setup steps.\n\nName: browseract\nURL: https://mcp.browseract.com/mcp/\nTransport: Streamable HTTP\nAuthorization: Bearer <BROWSERACT_API_KEY>\n\nReuse a valid key, or get one at https://www.browseract.com/reception/integrations?co-from=link-Docs. Enter it in local configuration or a secure credential field, never in chat.\n\nReuse or repair an existing browseract connection; preserve other MCP settings. Verify that BrowserAct tools are available, and reload only if needed. Report any setup or verification issue. Do not run tasks.",
    "group": "client"
  },
  {
    "name": "VS Code",
    "icon": "/images/global-mcp/vscode.svg",
    "prompt": "Connect BrowserAct to VS Code using its MCP configuration and secure input for the API Key. Configure it if you can; otherwise give the setup steps.\n\nName: browseract\nURL: https://mcp.browseract.com/mcp/\nTransport: Streamable HTTP\nAuthorization: Bearer <BROWSERACT_API_KEY>\n\nReuse a valid key, or get one at https://www.browseract.com/reception/integrations?co-from=link-Docs. Enter it in local configuration or a secure credential field, never in chat.\n\nReuse or repair an existing browseract connection; preserve other MCP settings. Verify that BrowserAct tools are available, and reload only if needed. Report any setup or verification issue. Do not run tasks.",
    "group": "client"
  },
  {
    "name": "Cursor",
    "icon": "/images/global-mcp/cursor.svg",
    "prompt": "Connect BrowserAct to Cursor using its supported remote MCP configuration. Configure it if you can; otherwise give the setup steps.\n\nName: browseract\nURL: https://mcp.browseract.com/mcp/\nTransport: Streamable HTTP\nAuthorization: Bearer <BROWSERACT_API_KEY>\n\nReuse a valid key, or get one at https://www.browseract.com/reception/integrations?co-from=link-Docs. Enter it in local configuration or a secure credential field, never in chat.\n\nReuse or repair an existing browseract connection; preserve other MCP settings. Verify that BrowserAct tools are available, and reload only if needed. Report any setup or verification issue. Do not run tasks.",
    "group": "client"
  },
  {
    "name": "Anthropic API",
    "icon": "/images/global-mcp/anthropic.svg",
    "prompt": "In my application, connect BrowserAct through the Anthropic API MCP integration. Check current SDK support and provide the minimal working code; explain any missing connector support. Keep the key in a server-side secret.\n\nName: browseract\nURL: https://mcp.browseract.com/mcp/\nTransport: Streamable HTTP\nAuthorization: Bearer <BROWSERACT_API_KEY>\n\nReuse a valid key, or get one at https://www.browseract.com/reception/integrations?co-from=link-Docs. Enter it in local configuration or a secure credential field, never in chat.\n\nReuse or repair an existing browseract connection; preserve other MCP settings. Verify that BrowserAct tools are available, and reload only if needed. Report any setup or verification issue. Do not run tasks.",
    "group": "api"
  },
  {
    "name": "OpenAI API",
    "icon": "/images/global-mcp/openai.svg",
    "prompt": "In my application, connect BrowserAct through the OpenAI Responses API remote MCP integration. Provide minimal working code with server-side authorization; keep tool approval enabled.\n\nName: browseract\nURL: https://mcp.browseract.com/mcp/\nTransport: Streamable HTTP\nAuthorization: Bearer <BROWSERACT_API_KEY>\n\nReuse a valid key, or get one at https://www.browseract.com/reception/integrations?co-from=link-Docs. Enter it in local configuration or a secure credential field, never in chat.\n\nReuse or repair an existing browseract connection; preserve other MCP settings. Verify that BrowserAct tools are available, and reload only if needed. Report any setup or verification issue. Do not run tasks.",
    "group": "api"
  },
  {
    "name": "OpenAI Agent Builder",
    "icon": "/images/global-mcp/openai.svg",
    "prompt": "Guide me through connecting BrowserAct as a remote MCP server in OpenAI Agent Builder. Use its supported authorization field and retain tool approval; report if Bearer authentication is unavailable.\n\nName: browseract\nURL: https://mcp.browseract.com/mcp/\nTransport: Streamable HTTP\nAuthorization: Bearer <BROWSERACT_API_KEY>\n\nReuse a valid key, or get one at https://www.browseract.com/reception/integrations?co-from=link-Docs. Enter it in local configuration or a secure credential field, never in chat.\n\nReuse or repair an existing browseract connection; preserve other MCP settings. Verify that BrowserAct tools are available, and reload only if needed. Report any setup or verification issue. Do not run tasks.",
    "group": "api"
  },
  {
    "name": "JSON Config",
    "icon": "/images/global-mcp/json.svg",
    "prompt": "Identify my MCP client and generate the JSON configuration it supports for BrowserAct. Preserve existing servers and use a secure key reference. Ask which client I use if unclear.\n\nName: browseract\nURL: https://mcp.browseract.com/mcp/\nTransport: Streamable HTTP\nAuthorization: Bearer <BROWSERACT_API_KEY>\n\nReuse a valid key, or get one at https://www.browseract.com/reception/integrations?co-from=link-Docs. Enter it in local configuration or a secure credential field, never in chat.\n\nReuse or repair an existing browseract connection; preserve other MCP settings. Verify that BrowserAct tools are available, and reload only if needed. Report any setup or verification issue. Do not run tasks.",
    "group": "other"
  }
];
  const copy = async (item, index) => {
    try { await navigator.clipboard.writeText(item.prompt); setCopied(index); setError(-1); setTimeout(() => setCopied(-1), 1800); }
    catch { setError(index); }
  };
  return <div className="not-prose grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 my-5">
    {items.map((item, index) => <div key={item.name} className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 flex flex-col items-center gap-3 text-center">
      <img src={item.icon} alt="" width="32" height="32" style={{ width: "32px", height: "32px", objectFit: "contain", margin: 0 }} />
      <span className="text-sm font-semibold flex-1">{item.name}</span>
      <button type="button" onClick={() => copy(item, index)} aria-label={"Copy setup prompt for " + item.name} aria-live="polite" className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-2 py-2 text-sm font-medium">{copied === index ? "Copied" : error === index ? "Copy failed" : "Copy prompt"}</button>
    </div>)}
  </div>;
};
