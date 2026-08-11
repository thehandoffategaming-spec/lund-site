import http.server
import socketserver

# Configure the server settings
PORT = 8000
HANDLER = http.server.SimpleHTTPRequestHandler

# Run the server
with socketserver.TCPServer(("", PORT), HANDLER) as httpd:
    print(f"🚀 Local server running at http://localhost:{PORT}")
    print("Press Ctrl+C to stop the server.")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n👋 Server stopped successfully.")
