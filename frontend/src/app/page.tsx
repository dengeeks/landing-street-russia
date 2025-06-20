import Banner from "@/widgets/banner";
import Goals from "@/widgets/goals";
import HomeTopic from "@/widgets/home-topic";
import ProgramInfo from "@/widgets/program-info";
import Partners from "@/widgets/partners";
import ParticipantsInfo from "@/widgets/participants-info/ui/ParticipantsInfo";
import ModeratorsAndExperts from "@/widgets/moderators-and-experts";
import MediaAccreditation from "@/widgets/media-accreditation";
import VenueMap from "@/widgets/venue-map";
import Registration from "@/widgets/registration";

export default function Home() {
    return (
        <>
            <Banner/>
            <Goals/>
            <HomeTopic/>
            <ProgramInfo/>
            <ParticipantsInfo/>
            <Registration/>
            <ModeratorsAndExperts/>
            <VenueMap/>
            <Partners/>
            <MediaAccreditation/>
        </>
    );
}
