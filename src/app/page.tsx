
import Page from './ui/excalidraw';

interface HeaderProps {
    title?: string
    style: {
        margin?: string,
        color?: string,
        minWidth?: string
    }
}

function Header({ title, style }: HeaderProps) {
    return <h1 style={style}> <b> {title ? title : 'Default title'}</b></h1>;
}

export default function HomePage() {
    return (
        <div suppressHydrationWarning={true}>
            <Header title="Collaborative Whiteboard!" style={{ margin: "2% 45% 1% 45%", color: "green", minWidth: "50%" }} />

            <div style={{ margin: "0% 5% 5% 5%", borderRadius: "25px", backgroundColor: "#007BFF", border: "2px solid #007BFF", padding: "20px" }} >
                <Page />
            </div>
        </div>
    );
};