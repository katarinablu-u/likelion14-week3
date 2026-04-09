function Button({ text }) {
    return ( // Button이 아니라 button 이야 
        <button 
        style={{
            width: '450px',
            padding: '16px',
            backgroundColor: '#C6E400',
            border: '1px solid black',
            fontSize: '18px',
            fontWeight: 'bold',
            borderRadius: '0px',
            cursor: 'pointer',
        }}
        >
            {text}
        </button>
    );
}
export default Button;