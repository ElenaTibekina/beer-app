export const MenuButton = () => {
    const style = {
        backgroundColor: '#FFF',
        display: 'inline-block',
        cursor: 'pointer',
        height: '40px',
        width: '40px',
        padding: '3px',
        borderRadius: '10px'
    };

    const lineStyle = {
        backgroundColor: 'black',
        height: '2px',
        width: '30px',
        margin: '8px 0',
    };

    return (
        <div style={style}>
            <div style={lineStyle}/>
            <div style={{...lineStyle, width: '25px'}}/>
            <div style={lineStyle}/>
        </div>
    );
};