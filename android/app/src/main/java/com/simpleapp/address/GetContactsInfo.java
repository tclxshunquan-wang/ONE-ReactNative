package com.simpleapp.address;

/**
 * ==================================
 * Created by  on 2017/8/15.
 *
 * @author shunq-wang
 *         ==================================
 */

import android.content.Context;
import android.database.Cursor;
import android.provider.ContactsContract.CommonDataKinds.Phone;
import android.provider.ContactsContract.CommonDataKinds.StructuredName;
import android.provider.ContactsContract.Data;
import android.provider.ContactsContract.Groups;
import android.text.TextUtils;
import android.util.ArrayMap;
import android.util.Log;
import android.util.SparseArray;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class GetContactsInfo {
    private List<Object> list;
    private Context context;
    private JSONArray contactData;
    private JSONObject jsonObject;

    HashMap hashMap=new HashMap<Integer,String>();

    public GetContactsInfo(Context context) {
        this.context = context;
    }

    /**
     * 1.名字信息-StructuredName
     * 2.组织(公司,职位)-
     * 3.号码
     * 4.邮件
     * 5.地址
     * 6.称呼
     * 7.网站
     * 8.即时消息
     *-- 9.互联网通话
     * 10.生日
     * 11.农历生日
     * 12.备注
     * 13.群组
     *
     *
     * @return
     * @throws JSONException
     */
    public String getContactInfo() throws JSONException {
        // 获得通讯录信息 ，URI是ContactsContract.Contacts.CONTENT_URI
        list = new ArrayList<Object>();
        contactData = new JSONArray();
        String mimetype = "";
        int oldrid = -1;
        int contactId = -1;
        HashMap<String, String> groupsMap = new HashMap<String, String>();

        Cursor cursorGroup = context.getContentResolver().query(Groups.CONTENT_URI, null, null, null, null);
        while (cursorGroup.moveToNext()) {
            groupsMap.put(cursorGroup.getString(cursorGroup.getColumnIndex(Groups._ID)), cursorGroup.getString(cursorGroup.getColumnIndex("title")));
        }
        cursorGroup.close();
        Cursor cursor = context.getContentResolver().query(Data.CONTENT_URI, null, null, null, Data.RAW_CONTACT_ID);
        //System.out.println(cursor.getCount());
        int numm = 0;
        while (cursor.moveToNext()) {
            contactId = cursor.getInt(cursor.getColumnIndex(Data.RAW_CONTACT_ID));
            if (oldrid != contactId) {
                jsonObject = new JSONObject();
                contactData.put(jsonObject);
                numm++;
                oldrid = contactId;
            }
            mimetype = cursor.getString(cursor.getColumnIndex(Data.MIMETYPE));

            if (mimetype.equals(StructuredName.CONTENT_ITEM_TYPE)) {//姓名
                String n="";

                //姓氏
                String family_name = cursor.getString(cursor.getColumnIndex(StructuredName.FAMILY_NAME));
                if(family_name!=null && !TextUtils.isEmpty(family_name)){
                    n=family_name;
                }


                //中间名
                String middleName = cursor.getString(cursor.getColumnIndex(StructuredName.MIDDLE_NAME));
                if(middleName!=null && !TextUtils.isEmpty(middleName)){
                    n=n+middleName;
                }


                //名字
                String given_name = cursor.getString(cursor.getColumnIndex(StructuredName.GIVEN_NAME));
                if(given_name!=null && !TextUtils.isEmpty(given_name)){
                    n=n+given_name;
                }

                jsonObject.putOpt("name", n);


            } else if (mimetype.equals(Phone.CONTENT_ITEM_TYPE)) {//电话
                //JSONObject phone=new JSONObject();
                // 取出电话类型
                String number = cursor.getString(cursor.getColumnIndex(Phone.NUMBER));
                jsonObject.putOpt("phone", number);

            }
        }
        cursor.close();
        Log.i("contactData", contactData.toString());

        return contactData.toString();
    }
}