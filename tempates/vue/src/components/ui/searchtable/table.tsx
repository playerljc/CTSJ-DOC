import moment from 'moment';
import { Input, Select, InputNumber, DatePicker } from 'ant-design-vue';
import { SearchTable, Resource, Ajax } from '@baifendian/adherev';

const request = new Ajax('');

const { Option } = Select;
const { RangePicker } = DatePicker;
const { SearchTableImplement, SearchForm, SearchFormRow, SearchFormLabel, SearchFormValue } =
  SearchTable;

const SearchTableImplementMixins = SearchTableImplement();

export default {
  mixins: [SearchTableImplementMixins],
  data() {
    return {
      loading: false,
      dataSource: {
        total: 0,
        list: [],
      },
    };
  },
  props: {
    pagination: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    pagination(oldValue, newValue) {
      if (oldValue !== newValue) {
        this.scrollY = 0;
      }
    },
  },
  methods: {
    getParams() {
      return {
        name: '',
        sex: '',
        startTime: null,
        endTime: null,
        deptCode: '',
        homeTown: '',
        width: '',
        height: '',
      };
    },
    getFetchDataParams() {
      const { startTime, endTime } = this.searchParams;

      return {
        startTime: startTime
          ? startTime.format(Resource.Dict.value.ResourceMomentFormatFull.value)
          : null,
        endTime: endTime
          ? endTime.format(Resource.Dict.value.ResourceMomentFormatFull.value)
          : null,
      };
    },
    getData() {
      return this.dataSource.list;
    },
    getTotal() {
      return this.dataSource.total;
    },
    getColumns() {
      return [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
          align: 'center',
          width: 200,
        },
        {
          title: '性别',
          dataIndex: 'sex',
          key: 'sex',
          align: 'center',
          width: 200,
          scopedSlots: { customRender: 'sex' },
        },
        {
          title: '籍贯',
          dataIndex: 'homeTown',
          key: 'homeTown',
          align: 'center',
          width: 200,
        },
        {
          title: '出生年月',
          dataIndex: 'birthday',
          key: 'birthday',
          align: 'center',
          sorter: true,
          width: 200,
          sortOrder: this.sortOrder('birthday'),
          scopedSlots: { customRender: 'birthday' },
        },
        {
          title: '所在部门',
          dataIndex: 'deptName',
          key: 'deptName',
          align: 'center',
          width: 200,
        },
        {
          title: '身高',
          dataIndex: 'height',
          key: 'height',
          align: 'center',
          sorter: true,
          sortOrder: this.sortOrder('height'),
          width: 300,
        },
        {
          title: '体重',
          dataIndex: 'width',
          key: 'width',
          align: 'center',
          sorter: true,
          sortOrder: this.sortOrder('width'),
          width: 300,
        },
      ];
    },
    getScopedSlots() {
      return {
        sex: (text) => {
          return Resource.Dict.value.ResourceNormalSexMap.value.get(text).label;
        },
        birthday: (text) => {
          return text ? moment(text).format(Resource.Dict.value.ResourceMomentFormat10.value) : '';
        },
      };
    },
    renderSearchForm(h) {
      return (
        <SearchForm>
          <SearchFormRow>
            <SearchFormLabel style="width: 120px;">姓名：</SearchFormLabel>
            <SearchFormValue>
              <Input
                style="width: 90%"
                placeholder="姓名"
                value={this.name}
                onChange={(e) => {
                  this.name = e.target.value.trim();
                }}
              />
            </SearchFormValue>

            <SearchFormLabel style="width: 120px;">性别：</SearchFormLabel>
            <SearchFormValue>
              <Select
                style="width: 90%"
                value={this.sex}
                getPopupContainer={Resource.Dict.value.FormPopupContainer.value}
                onChange={(v) => {
                  this.sex = v;
                }}
              >
                {Resource.Dict.value.ResourceNormalSex.value.map((t) => (
                  <Option key={t.value} value={t.value}>
                    {t.label}
                  </Option>
                ))}
              </Select>
            </SearchFormValue>

            <SearchFormLabel style="width: 120px;">出生年月：</SearchFormLabel>
            <SearchFormValue>
              <RangePicker
                style="width: 90%"
                value={[this.startTime, this.endTime]}
                getPopupContainer={Resource.Dict.value.FormPopupContainer.value}
                onChange={(moments) => {
                  this.startTime = moments.length ? moments[0] : null;

                  this.endTime = moments.length ? moments[1] : null;
                }}
                getCalendarContainer={(el) => el.parentElement}
              />
            </SearchFormValue>
          </SearchFormRow>

          <SearchFormRow>
            <SearchFormLabel style="width: 120px;">籍贯：</SearchFormLabel>
            <SearchFormValue>
              <Input
                style="width: 90%"
                placeholder="籍贯"
                value={this.homeTown}
                onChange={(e) => {
                  this.homeTown = e.target.value.trim();
                }}
              />
            </SearchFormValue>

            <SearchFormLabel style="width: 120px;">身高：</SearchFormLabel>
            <SearchFormValue>
              <InputNumber
                style="width: 90%"
                placeholder="身高"
                value={this.height}
                onChange={(v) => {
                  this.height = v;
                }}
              />
            </SearchFormValue>

            <SearchFormLabel style="width: 120px;">体重：</SearchFormLabel>
            <SearchFormValue>
              <InputNumber
                style="width: 90%"
                placeholder="体重"
                value={this.width}
                onChange={(v) => {
                  this.width = v;
                }}
              />
            </SearchFormValue>
          </SearchFormRow>

          <SearchFormRow>
            <SearchFormLabel style="width: 120px;">所在部门：</SearchFormLabel>
            <SearchFormValue>
              <Select
                style="width: 90%"
                value={this.deptCode}
                onChange={(v) => {
                  this.deptCode = v;
                }}
                getPopupContainer={Resource.Dict.value.FormPopupContainer.value}
              >
                <Option value="">全部</Option>

                <Option value="0">产品部</Option>

                <Option value="1">开发部</Option>

                <Option value="2">工程部</Option>
              </Select>
            </SearchFormValue>
          </SearchFormRow>
        </SearchForm>
      );
    },
    renderSearchFooterItems() {
      return null;
    },
    showLoading() {
      return this.loading;
    },
    getOrderFieldValue() {
      return 'height';
    },
    fetchDataExecute(searchParams) {
      this.loading = true;

      return request
        .get({
          mock: true,
          path: require('./mock.js').default,
        })
        .then((result) => {
          this.dataSource = {
            total: result.total,
            list: result.list,
          };

          this.loading = false;
        });
    },
    getPagination() {
      const { pagination } = this;

      if (pagination) {
        return this.getSearchTablePagination();
      }

      return false;
    },
  },
};
