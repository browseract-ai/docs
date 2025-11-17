export const Comment = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 移除已有 Giscus iframe（防止重复渲染）
    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";

    // 配置 Giscus 参数
    script.setAttribute("data-repo", "browseract-ai/docs");
    script.setAttribute("data-repo-id", "R_kgDOQUCf6w");
    script.setAttribute("data-category-id", "DIC_kwDOQUCf684Cx37a");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "false");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", "en");

    containerRef.current.appendChild(script);
  }, []);

  return <div ref={containerRef} id="comments" style={{ width: "100%", marginTop: "50px" }} />;
};
