import {
    BarWrapper,
    Bar,
    Card,
    CardBody,
    CardFooter,
    Label,
    CardHeader,
    Heading4, IconWrapper,
    MetricRow, Progress, ProgressContainer, Value
} from "src/components/neubruatalist/neubratalist.jsx";
import {MdCampaign, MdEmail, MdMarkEmailRead, MdTouchApp, MdUpload} from "react-icons/md";

const metrics = [
    { label: "Sent Emails", value: 46, color: "#3b82f6", Icon: MdEmail },
    { label: "Email Opened", value: 46, color: "#22c55e", Icon: MdMarkEmailRead },
    { label: "Clicked Link", value: 46, color: "#3b82f6", Icon: MdTouchApp },
    { label: "Email Reported", value: 46, color: "#ef4444", Icon: MdCampaign },
];

export default function MetricsCard() {
    return (
        <Card className="bg-white p-4">
            <CardHeader className="bg-white">
                <Heading4 className="text-primary-600">Phishing Emails</Heading4>
            </CardHeader>
            <CardBody className="bg-white">
                {metrics.map(({ label, value, color, Icon }) => (
                    <MetricRow key={label} className="mb-2 last:mb-0">
                        <IconWrapper>
                            <Icon size={20} color={color} />
                        </IconWrapper>
                        <Label className="w-12">{label}</Label>
                        <BarWrapper className="h-18 rounded-lg">
                            <Bar dataKey={value} fill={color} style={{ borderRadius: "4px", width: `${value}%`, backgroundColor: color }} />
                        </BarWrapper>
                        <Value style={{ borderColor: color, color, borderWidth: "1px", borderRadius: "4px" }}>{value}%</Value>
                    </MetricRow>
                ))}
            </CardBody>
        </Card>
    )
}