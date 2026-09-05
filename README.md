# Lộ trình Angular cô đọng — v3 (đã bỏ Mosh, dùng Angular University)

> Dành cho: Dev đã biết React/TS, muốn học nhanh, học qua project ngay từ đầu thay vì học hết lý thuyết mới thực hành.

---

## Nguyên tắc

- **Bỏ qua**: JS/TS cơ bản, khái niệm component/props, REST API, Git.
- **DI, RxJS, Signals, Change Detection** là 4 hệ thống Angular mà React không có cơ chế built-in tương đương trực tiếp (không phải "hoàn toàn không có tương đương" — chúng giải quyết vấn đề tương tự React theo cơ chế khác).
- **Học qua mini-project tăng dần mỗi tuần**, không đợi học hết lý thuyết mới code.
- Mỗi tuần: **"phải thành thạo"** vs **"chỉ cần hiểu, project sẽ ép đào sâu sau"**.

## Nguồn học

> ⚠️ Đã bỏ Mosh's Angular Crash Course — kiểm tra lại thì đây thực chất là "Angular 4 Crash Course" (~2018), nhiều phần HTTP/binding đã lỗi thời theo report trên chính forum của Mosh. Học mental model NgModule cũ rồi phải unlearn sang standalone/signals sẽ chậm hơn, không đúng mục tiêu "đi nhanh".

| Vai trò                                                           | Nguồn                                                                                  |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Nền tảng Angular Core (Component, Template, DI, CD, Lifecycle...) | **Angular University — Angular Deep Dive (Angular 22)**, update 8/2026, uy tín lâu năm |
| Đào sâu Modern Angular (Signals/CD/Zoneless)                      | **Kobi — Modern Angular 22 with Signals: The Missing Guide**                           |
| DI / Forms / HTTP / Router / RxJS / Architecture                  | Roadmap + **Angular official docs (angular.dev)** + thực hành project                  |
| Biến kiến thức thành kỹ năng                                      | **Project xuyên suốt 6 tuần**, không tách riêng                                        |

**Lưu ý quan trọng:** đừng xem "Angular Deep Dive" theo tốc độ người mới học — bạn có React/TS nên: xem concept → tự so sánh React → skip phần JS/TS cơ bản → code lại ngay. Không cần thêm khóa riêng cho RxJS/Forms/Router — 2 khóa trên + docs + project là đủ; đừng mua thêm 5-6 khóa nữa.

---

## Timeline 6 tuần (2h/ngày) — có project xuyên suốt

### Week 1 — Angular Core (nguồn: Angular Deep Dive)

**Phải thành thạo:** Component · Template · Input/Output · `@if`/`@for` + `track`
**Chỉ cần hiểu (project sẽ ép đào sâu sau):** Directive · Pipe · Lifecycle · Standalone

🎯 Output tuần này:

```
UserList
 ├── UserCard
 ├── UserFilter
 └── UserDetail
```

### Week 2 — Angular Mental Model (DI + Signals) (nguồn: Angular Deep Dive + Kobi)

DI: Provider · Injector · Service · Facade
Signals: `signal` · `computed` · `effect` · `input()`/`output()`/`model()`
**Giới thiệu nhẹ** mối liên hệ Signal ↔ Change Detection (mental model, chưa cần sâu):

```
signal đổi → Angular biết view nào phụ thuộc → chỉ update đúng phần đó
```

🎯 Output tuần này (mở rộng project):

```
UserComponent → UserFacade → UserService
state = signal(...) / derived = computed(...)
```

### Week 3 — Application Infrastructure (Router + HTTP) (nguồn: docs + project)

Router: Routes · Params · Query params · Guards · Lazy loading
HTTP: HttpClient · Interceptor · Error handling · Auth token

🎯 Output tuần này (mở rộng project):

```
/login  /users  /users/:id  /tasks
```

### Week 4 — Forms (nguồn: docs + project — master Reactive Forms trước, Signal Forms học sau nếu cần)

Reactive Forms: FormControl · FormGroup · FormArray · Validators · Custom/Async Validator · `valueChanges`/`statusChanges`

🎯 Output tuần này (mở rộng project): `UserForm`, `TaskForm`

### Week 5 — RxJS (trọng tâm lớn nhất) (nguồn: RxJS official docs + Angular Deep Dive phần CD + tự code)

Phân bổ thời gian:

```
RxJS core + 4 operator (switch/merge/concat/exhaust)  ██████████ 60%
RxJS ↔ Signals (toSignal/toObservable)                ███        20%
Change Detection deep dive (OnPush/Zone/Zoneless)     ███        20%
```

Học: `Observable`, `Subscription`, `map/filter/tap`, `switchMap/mergeMap/concatMap/exhaustMap`, `debounceTime`/`distinctUntilChanged`, `catchError`/`finalize`, `Subject`/`BehaviorSubject`, `takeUntilDestroyed`, `toSignal`/`toObservable`.

🎯 Output tuần này (mở rộng project):

```
Search → debounce → switchMap → HTTP → toSignal → Template
```

### Week 6 — Architecture + Performance + Refactor project (nguồn: Kobi phần Zoneless + project)

Change Detection (đào sâu tiếp): OnPush · Signals+OnPush · Zoneless
Feature architecture · Facade · State management overview (khi nào cần NgRx) · Auth flow đầy đủ · Performance overview

**Testing** học **song song khi project bắt đầu ổn định**, không dành riêng 1 tuần trước đó.

🎯 Output: refactor toàn bộ project theo kiến trúc feature-based, thêm OnPush, viết vài unit test cho service quan trọng.

---

## Checklist theo tuần

```
Week 1
[ ] Component/template/@if/@for/track — thành thạo
[ ] Hiểu sơ Directive/Pipe/Lifecycle (chưa cần sâu)

Week 2
[ ] Hiểu DI: provider, injector, scope
[ ] Dùng được signal/computed/effect + input()/output()/model()
[ ] Hiểu mental model: signal đổi → Angular update đúng phần view liên quan

Week 3
[ ] Viết route có guard + lazy loading
[ ] Viết interceptor gắn auth token + xử lý lỗi

Week 4
[ ] Viết Reactive Form có custom + async validator

Week 5
[ ] Phân biệt rõ switchMap/mergeMap/concatMap/exhaustMap qua tình huống thực tế
[ ] Dùng được toSignal/toObservable để nối RxJS ↔ Signals

Week 6
[ ] Hiểu OnPush + Zoneless, biết khi nào Signals giúp CD tốt hơn
[ ] Refactor project theo feature-based architecture
[ ] Viết vài unit test cho service quan trọng (song song, không học riêng)
```

---

## 5 lỗi tư duy cần tránh (đã tinh chỉnh)

1. Nghĩ `effect()` = `useEffect` → sai, effect tự track signal, không cần dependency array.
2. Nghĩ Context = DI → DI mạnh hơn nhiều (scope, hierarchical, token).
3. **Không mặc định dùng `switchMap` cho mọi action submit.** Với action cần chống double-submit, `exhaustMap` thường phù hợp hơn — nhưng nếu nghiệp vụ yêu cầu "request mới phải hủy request cũ", `switchMap` vẫn đúng. Chọn operator theo **ý định nghiệp vụ**, không theo rule cứng.
4. Quên `track` trong `@for` hoặc track theo index.
5. Thêm Facade/NgRx cho app nhỏ chưa cần → over-engineering. Đi theo bậc thang:

```
Component state → Signal → Service state → Facade → Global state → NgRx
(chỉ leo lên bậc tiếp theo khi gặp vấn đề thật sự)
```

---

## 8 câu hỏi tự kiểm tra sau 6 tuần

Nếu nhìn 1 codebase Angular và tự trả lời tự nhiên được các câu sau, nghĩa là bạn đã thực sự chuyển mental model từ React sang Angular:

1. State nằm ở đâu?
2. Signal hay Observable?
3. Dependency được inject thế nào?
4. Business logic nằm ở Service/Facade nào?
5. HTTP đi qua đâu?
6. Route được bảo vệ thế nào?
7. Form quản lý state thế nào?
8. Angular quyết định update view thế nào?

---

## Ví dụ chuyển mental model nhanh (React → Angular)

```tsx
// React
function UserList({ users, onSelect }) {
  return (
    <>
      {users.map((user) => (
        <UserCard key={user.id} user={user} onSelect={onSelect} />
      ))}
    </>
  );
}
```

```ts
// Angular
@Component({ standalone: true, ... })
export class UserList {
  users = input.required<User[]>();
  select = output<User>();
}
```

```html
@for (user of users(); track user.id) {
<app-user-card [user]="user" (select)="select.emit($event)" />
}
```

**Bài tập:** mỗi tuần, chọn 1 component React bạn từng viết và chuyển nó sang Angular theo đúng kiến thức tuần đó — đây là cách chuyển mental model nhanh nhất, nhanh hơn xem thêm video.
