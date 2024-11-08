import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { TransactionColumns } from "./_columns";
import AddTransactionButton from "../_components/add-transaction-button";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({
    orderBy: {
      createdAt: "asc", // Ordena do mais recente para o mais antigo
    },
  });
  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between p-6">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton></AddTransactionButton>
      </div>
      <DataTable columns={TransactionColumns} data={transactions}></DataTable>
    </div>
  );
};

export default TransactionsPage;
