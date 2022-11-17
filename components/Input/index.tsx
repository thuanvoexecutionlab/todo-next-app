import styled from "styled-components";

interface PropsInput {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: any) => void;
    mt?: string;
    mb?: string;
}
export const InputApp = styled.input<PropsInput>`
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 10px;
    font-size: 16px;
    outline: none;
    transition: all 0.3s ease;
    margin-top: ${(props) => props.mt};
    margin-bottom: ${(props) => props.mb};
    &:focus {
        border-color: #007bff;
    }
`;
