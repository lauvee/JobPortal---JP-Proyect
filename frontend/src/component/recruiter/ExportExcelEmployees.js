import { Button, Tooltip } from "@material-ui/core";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import apiList, { server } from "../../lib/apiList";
import AcceptedApplicants from "../../component/recruiter/AcceptedApplicants";

const ExportExcelEmployees = ({ csvData, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = async () => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <>
      <Tooltip title="Excel Export">
        <Button
          variant="contained"
          onClick={(e) => exportToCSV(fileName)}
          color="primary"
          style={{ cursor: "pointer", fontSize: 14 }}
        >
          Excel Export
        </Button>
      </Tooltip>
    </>
  );
};

export default ExportExcelEmployees;
