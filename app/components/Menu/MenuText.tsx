export const MenuText = ({user}) => (
    <div style={{paddingBottom: '20px'}}>
        <h3 style={{fontFamily: 'DM Sans, sans-serif', lineHeight: '20.83px', color: '#646464', size: '16px', fontWeight: '400', paddingBottom: '10px'}}>Hi {user.title}. {user.name}</h3>
        <h2 style={{fontFamily: 'DM Sans, sans-serif', lineHeight: '20.83px', color: '#323232', size: '24px', fontWeight: '400'}}>Welcome Back!</h2>
    </div>
)