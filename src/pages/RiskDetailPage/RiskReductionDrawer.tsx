import { ControlRow } from "../../mocks/data";
import Button from "../../components/Button/Button";
import { IconDots } from "../../icons/Icons";
import {
  StyledBackdrop,
  StyledDrawer,
  StyledDrawerHeader,
  StyledDrawerBody,
  StyledOverviewBox,
  StyledFieldLabel,
  StyledFieldBlock,
  StyledPercentRow,
  StyledPercentInput,
  StyledSectionTitle,
  StyledDrawerFooter,
} from "./RiskReductionDrawer.styles";

type Props = {
  open: boolean;
  onClose: () => void;
  riskName: string;
  control: ControlRow | null;
};

export default function RiskReductionDrawer({ open, onClose, riskName, control }: Props) {
  if (!open || !control) return null;

  return (
    <>
      <StyledBackdrop onClick={onClose} />
      <StyledDrawer>
        <StyledDrawerHeader>
          <h2>Risk reduction mapping</h2>
          <button className="dots" aria-label="More">
            <IconDots />
          </button>
        </StyledDrawerHeader>

        <StyledDrawerBody>
          <StyledOverviewBox>
            <StyledFieldLabel>Control overview</StyledFieldLabel>
            <div className="name">{control.name}</div>
            <div className="meta">Applied to risk: <strong>{riskName}</strong></div>
            <div className="pill">● Partially effective</div>
          </StyledOverviewBox>

          <StyledFieldBlock>
            <StyledSectionTitle>Operational effectiveness</StyledSectionTitle>

            <StyledPercentRow>
              <StyledFieldLabel>Effective</StyledFieldLabel>
              <StyledPercentInput>
                <input type="number" defaultValue={80} />
                <span>%</span>
              </StyledPercentInput>
            </StyledPercentRow>
            <StyledPercentRow>
              <StyledFieldLabel>Partially effective</StyledFieldLabel>
              <StyledPercentInput>
                <input type="number" defaultValue={40} />
                <span>%</span>
              </StyledPercentInput>
            </StyledPercentRow>
            <StyledPercentRow>
              <StyledFieldLabel>Ineffective</StyledFieldLabel>
              <StyledPercentInput>
                <input type="number" defaultValue={0} />
                <span>%</span>
              </StyledPercentInput>
            </StyledPercentRow>
          </StyledFieldBlock>

          <StyledFieldBlock>
            <StyledSectionTitle>Design effectiveness</StyledSectionTitle>

            <StyledPercentRow>
              <StyledFieldLabel>Effective</StyledFieldLabel>
              <StyledPercentInput>
                <input type="number" defaultValue={100} />
                <span>%</span>
              </StyledPercentInput>
            </StyledPercentRow>
            <StyledPercentRow>
              <StyledFieldLabel>Partially effective</StyledFieldLabel>
              <StyledPercentInput>
                <input type="number" defaultValue={50} />
                <span>%</span>
              </StyledPercentInput>
            </StyledPercentRow>
            <StyledPercentRow>
              <StyledFieldLabel>Ineffective</StyledFieldLabel>
              <StyledPercentInput>
                <input type="number" defaultValue={0} />
                <span>%</span>
              </StyledPercentInput>
            </StyledPercentRow>
          </StyledFieldBlock>
        </StyledDrawerBody>

        <StyledDrawerFooter>
          <Button variant="text" onClick={onClose}>Close</Button>
          <Button variant="primary" onClick={onClose}>Save</Button>
        </StyledDrawerFooter>
      </StyledDrawer>
    </>
  );
}
