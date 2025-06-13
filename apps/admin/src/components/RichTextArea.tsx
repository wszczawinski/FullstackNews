import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar: [
        [{header: [1, 2, 3, false]}],
        ["bold", "italic", "underline", "strike"],
        [{script: "sub"}, {script: "super"}],
        ["blockquote", "code-block"],
        [{list: "ordered"}, {list: "bullet"}],
        [{indent: "-1"}, {indent: "+1"}, {align: []}],
        ["link", "image", "video"],
        ["clean"],
    ],
};

export const RichTextArea = ({content, setContent}: {
    content: string,
    setContent: React.Dispatch<React.SetStateAction<string>>
}) => {
    return <ReactQuill className="h-72" modules={modules} defaultValue={content} onChange={setContent}/>

}
