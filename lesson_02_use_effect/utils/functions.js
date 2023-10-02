import moment from "moment";

export const formatDate = (datestr) => moment(datestr).format("LL");
