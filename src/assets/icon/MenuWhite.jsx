export const MenuWhite= () => {
    const svgContent = `<svg width="42" height="32" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1H41" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
    <path d="M1 11H41" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
    <path d="M1 21H41" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
    <path d="M1 31H41" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
    </svg>    
  `;
  
    return <div dangerouslySetInnerHTML={{ __html: svgContent }} />;
}
  