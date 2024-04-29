import { useEffect, useRef, useState } from "react"


export default function Background(props: {className?: string}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [context, setCanvasContext] = useState<CanvasRenderingContext2D>();

    useEffect(() => {
        const canvas = canvasRef.current;
        const canvasContext = canvas!.getContext("2d");
        setCanvasContext(canvasContext!);
    }, [])

    useEffect(() => {
        if (!context)
            return;

        const count = 50;
        const cells: {X: number, Y: number}[][] = new Array(count);
        
        for (var x = 0; x < cells.length; x++) {
            cells[x] = new Array(count);
            for(var y = 0; y < cells[x].length; y++) {
                cells[x][y] = {X: 0, Y: 0};
            }
        }
        const init = [".**", "**.", ".*."];
        
        {
            var h = Math.floor((count - 3) / 2);
            var t = Math.floor((count - 3) / 2);
            for (var x = 0; x < init.length; x++) {
                var w = init[x];
                for (var u = 0; u < w.length; u++) {
                    cells[t + x][h + u].X = (w.charAt(u) == "*") ? 1 : 0;
                }
            }
        }

        function fetch(x: number, y: number) {
            return (
              cells[(x + count - 1) % count][(y + count - 1) % count].X 
            + cells[(x + count) % count][(y + count - 1) % count].X
            + cells[(x + count + 1) % count][(y + count - 1) % count].X
            + cells[(x + count - 1) % count][(y + count) % count].X
            + cells[(x + count + 1) % count][(y + count) % count].X
            + cells[(x + count - 1) % count][(y + count + 1) % count].X
            + cells[(x + count) % count][(y + count + 1) % count].X
            + cells[(x + count + 1) % count][(y + count + 1) % count].X
            );
        }
    
        function k() {
            for (var x = 0; x < count; x++) {
                for (var y = 0; y < count; y++) {
                    var value = fetch(x, y);
                    cells[x][y].Y = 0;
                    if (value == 2 && cells[x][y].X == 1) {
                        cells[x][y].Y = 1;
                    }
                    if (value == 3) {
                        cells[x][y].Y = 1;
                    }
                }
            }
            for (var x = 0; x < count; x++) {
                for (var y = 0; y < count; y++) {
                    cells[x][y].X = Math.random() > 0.9995 ? 1 : cells[x][y].Y;
                }
            }

        }

        function update() 
        {
            k();
            const v = context!;            
            for (var x = 0; x < count; x++) {
                for (var y = 0; y < count; y++) {
                    if (cells[x][y].X == 1) {
                        v.fillStyle = "rgba(115,44,76,0.6)";
                    } else {
                        v.fillStyle = "rgba(0,0,0,0.1)"
                    }
                    v.fillRect(Math.floor(x * 20), Math.floor(y * 20), 20 - 1, 20 - 1)
                }
            }
        }

        const timeout = setInterval(update, 100);
        return () => clearInterval(timeout);
    }, [context])


    return (
        <>
            <canvas width={1000} height={1000} className={`absolute bg-blend-multiply scale-110 pointer-events-none object-cover w-full h-full ${props.className}`} ref={canvasRef} />
        </>)
}