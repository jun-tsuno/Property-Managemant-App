import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MyButton from "./MyButton";

export interface DialogProps {
	onClose: (val: string) => void;
	title?: string;
	message?: string;
}

const MyDialog = ({ onClose, title, message }: DialogProps) => {
	return (
		<>
			<Dialog
				open
				onClose={() => onClose("close")}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{title ?? "WARNING!"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						{message ?? "Are you sure to proceed?"}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<MyButton primary onClick={() => onClose("cancel")}>
						Cancel
					</MyButton>
					<MyButton danger onClick={() => onClose("ok")} autoFocus>
						OK
					</MyButton>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default MyDialog;
