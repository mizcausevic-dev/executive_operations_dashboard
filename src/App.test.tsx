import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("Executive Operations Dashboard", () => {
  it("renders the hero headline", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: /one command layer for revenue, platform, content, cost, security, and growth execution/i })).toBeInTheDocument();
  });

  it("shows system map cards", () => {
    render(<App />);
    expect(screen.getAllByText(/Revenue Ops AI Assistant/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Observability Incident Command/i).length).toBeGreaterThan(0);
  });
});
