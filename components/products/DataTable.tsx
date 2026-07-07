import {FileSpreadsheet} from "lucide-react";
import { PRODUCT_SPECSToCompare } from "@/data";

function DataTable() {
  return (
    <section>
        <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-brand-border/80 pb-3">
                <FileSpreadsheet className="text-brand-red" size={22} />
                <h3 className="font-condensed font-extrabold tracking-wider text-xl uppercase text-brand-black">
                  Side-By-Side Technical Specifications Comparison
                </h3>
              </div>

              <div className="overflow-x-auto border border-brand-border rounded-sm">
                <table className="w-full text-left font-sans text-sm border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-brand-black text-white font-condensed uppercase tracking-wider text-xs border-b border-white/5">
                      <th className="p-4">Technical Property / Feature</th>
                      <th className="p-4 font-mono">Laxmi Fe 500 Standard</th>
                      <th className="p-4 font-mono text-brand-gold">
                        Laxmi Fe 500D (Premium Ductility)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border">
                    {PRODUCT_SPECSToCompare.map((spec, i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-black/10" : "bg-white"}
                      >
                        <td className="p-4 font-medium text-brand-black select-none">
                          {spec.feature}
                        </td>
                        <td className="p-4 font-mono text-xs">{spec.fe500}</td>
                        <td className="p-4 font-mono text-xs text-brand-red font-semibold">
                          {spec.fe500d}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
    </section>
  )
}

export default DataTable