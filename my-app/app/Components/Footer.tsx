
export default function Footer() {
    return (
        <footer style={{
            width: "100%",
            padding: "1rem 0",
            background: "#222",
            color: "#fff",
            textAlign: "center",
            position: "fixed",
            left: 0,
            bottom: 0,
        }}>
            <p>&copy; {new Date().getFullYear()} | SHOKH | All rights reserved.</p>
        </footer>
    );
}
