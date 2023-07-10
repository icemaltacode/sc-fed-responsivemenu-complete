function Section({ role = 'primary', header = null, children }) {
    const SECTION_CONTAINER = {
        margin: '10px auto 10px auto',
        backgroundColor: `var(--bs-${role}-bg-subtle)`
    };

    return <div className='card' style={SECTION_CONTAINER}>
        {(header && <div className='card-header'>{header}</div>)}
        
        <div className='card-body'>
        {children}
        </div>
    </div>
}

export default Section;