export const CloseSVG = () => {
    const svgContent = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L25 25" stroke="white" stroke-width="2"/>
    <path d="M25 1L1 25" stroke="white" stroke-width="2"/>
    </svg>
  `;
  
    return <div dangerouslySetInnerHTML={{ __html: svgContent }} />;
}
  